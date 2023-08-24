<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class StudentController extends Controller
{
    public function index(Request $request): Response
    {
        $query = User::query();

        if ($request->filled('search')) {
            $searchTerm = $request->input('search');
            $query->where(function ($q) use ($searchTerm) {
                $q->where('name', 'like', "%$searchTerm%")
                    ->orWhere('blood_group', 'like', "%$searchTerm%");
            });
        }

        if ($request->filled('blood_group')) {
            $bloodGroup = $request->input('blood_group');
            $query->where('blood_group', $bloodGroup);
        }

        $users = $query->get();

        return Inertia::render('Student/List', [
            'users' => $users,
        ]);
    }

    public function show(User $student)
    {

        return Inertia::render('Student/Show', [
            'student' => $student,
        ]);
    }
}
