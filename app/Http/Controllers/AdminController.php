<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        return Inertia('Admin/AdminDashboard');
    }

    // Approve Account

    public function approveUser(int $id): RedirectResponse
    {
        $user = User::findOrFail($id);
        // Update the approved status to true
        if (!$user->approved) {
            $user->update(['approved' => true]);
        } else {
            $user->update(['approved' => false]);
        };

        return back()->with('success', 'User approved successfully.');
    }
}
