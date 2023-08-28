<?php

namespace App\Http\Controllers;

use App\Models\EmergencyContact;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Inertia\Response;

class EmergencyNumberController extends Controller
{
    public function index(): Response
    {
        $contacts = EmergencyContact::get();
        return Inertia('EmergencyContact/EmergencyContact', ['contacts' => $contacts]);
    }

    // Display the add Emergency contact page 
    public function showAddEmergencyContact(): Response
    {
        return Inertia('Admin/CreateEmergencyContact');
    }

    // Add Emergency Contact 
    public function store(Request $request): RedirectResponse
    {
        // Validate the incoming data
        $validator = Validator::make($request->all(), [
            'contact_number' => 'required|string',
            'logo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust max size as needed
            'locations' => 'required|string',
            'title' => 'required|string'
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        // Use a database transaction to ensure atomicity
        DB::beginTransaction();

        try {
            // Upload and store the image
            if ($request->hasFile('logo')) {
                $logoPath = $request->file('logo')->store('profiles/emergency', 'public');
            }

            // Create and store the new emergency contact
            $emergencyContact = new EmergencyContact([
                'title' => $request->input('title'),
                'contact_number' => $request->input('contact_number'),
                'logo' => $logoPath ?? null,
                'locations' => $request->input('locations'),
            ]);

            $emergencyContact->save();

            // Commit the transaction if all operations were successful
            DB::commit();

            return redirect()->route('add.emergencyContact')->with([
                'successMessage' => 'Emergency contact information stored successfully.'
            ]);
        } catch (\Exception $e) {
            // Rollback the transaction on error
            DB::rollback();

            // Handle the error as needed
            return back()->withErrors(['error' => 'An error occurred while saving the data'])->withInput();
        }
    }
}
