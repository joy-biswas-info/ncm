<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\EmergencyNumberController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/all-student', [StudentController::class, 'index'])->name('all.student');
    Route::get('/all-student/{student}', [StudentController::class, 'show'])->name('single.student');
});

Route::middleware('auth')->group(function () {
    Route::get('/all-user', function () {
        $users = User::get();
        return Inertia::render('Admin/AllUser', [
            'user' => $users
        ]);
    })->name('all.user');
    // Show Admin Dashboard 
    Route::get('/admin-dashboard', [AdminController::class, 'index'])->name('admin.dashboard');
    // update admin Profile 
    Route::get('/admin-profile', function () {
        return Inertia("Admin/AdminProfile");
    })->name('admin.profile');
    // Approve user account 
    Route::patch('/approve-user/{userId}', [AdminController::class, 'approveUser'])->name('approve.user');
    // Get a single user details for admin 
    Route::get('/users/{user}', [AdminController::class, 'show'])->name('single.user');
    Route::get('add/emergency-contact-number', [EmergencyNumberController::class, 'showAddEmergencyContact'])->name('add.emergencyContact');
    Route::post('add/emergency-contact-number', [EmergencyNumberController::class, 'store'])->name('add.emergencyContact');
});


require __DIR__ . '/auth.php';
