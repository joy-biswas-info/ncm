<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Inertia\Response;

class TeacherController extends Controller
{
    public function index(): Response
    {
        $teachers = Teacher::get();
        return Inertia('Extra/Teacher', [
            'teachers' => $teachers
        ]);
    }

    // Show Add teacher Page
    public function showAddTeacher(): Response
    {
        return Inertia('Admin/AddTeacher');
    }

    public function store(Request $request): RedirectResponse
    {
        $validator = Validator::make($request->all(), [
            'contact_number' => 'required|string',
            'profile_photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust max size as needed
            'name' => 'required|string',
            'job_title' => 'required|string'
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        // Use a database transaction to ensure atomicity
        DB::beginTransaction();

        try {
            if ($request->hasFile('profile_photo')) {
                $profilePhotoPath = $request->file('profile_photo')->store('profiles/teachers', 'public');
            } else {
                $profilePhotoPath = null;
            }

            // Create a new Teacher instance with the provided data
            $teacherInfo = new Teacher([
                'name' => $request->input('name'),
                'job_title' => $request->input('job_title'),
                'contact_number' => $request->input('contact_number'),
                'profile_photo' => $profilePhotoPath,
            ]);

            // Save the Teacher instance to the database only if profile photo was uploaded
            if ($profilePhotoPath) {
                $teacherInfo->save();
            }

            // Commit the transaction if all operations were successful
            DB::commit();

            return redirect()->route('add.teacher')->with([
                'success' => 'Teacher added successfully'
            ]);
        } catch (\Exception $e) {
            // Rollback the transaction on error
            DB::rollback();

            // Handle the error as needed
            return back()->withErrors(['error' => 'An error occurred while saving the data'])->withInput();
        }
    }
}
