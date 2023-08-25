<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        if (auth()->user()->role !== "Admin") {
            abort(403);
        } else {
            $users = User::get();
            return Inertia('Admin/AdminDashboard', [
                'users' => $users
            ]);
        }
    }

    // Approve Account

    public function approveUser(int $id): RedirectResponse
    {
        if (auth()->user()->role !== "Admin") {
            abort(403);
        }
        $user = User::findOrFail($id);
        // Update the approved status to true
        if (!$user->approved) {
            $user->update(['approved' => true]);
        } else {
            $user->update(['approved' => false]);
        };

        return back()->with('success', 'User approved successfully.');
    }
    public function show(User $user)
    {
        if (auth()->user()->role !== "Admin") {
            abort(403);
        }
        return Inertia::render('Admin/SingleUser', [
            'user' => $user,
        ]);
    }
}
