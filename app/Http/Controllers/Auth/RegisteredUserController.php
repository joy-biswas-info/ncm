<?php

namespace App\Http\Controllers\Auth;

use App\Enums\BloodGroup;
use App\Enums\ReadyToDonet;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $userField = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'phone' => 'required|string',
            'blood_group' => ['required', Rule::in(BloodGroup::toArray())],
            'ready_to_donet' => ['required', Rule::in(ReadyToDonet::toArray())],
            'age' => 'required|numeric',
            'gender' => 'required|string',
            'weight' => 'required|numeric',
            'academic_year' => 'required|string',
            'class_roll' => 'required|numeric',
            'gurdian_name' => 'required|string',
            'gurdian_phone_no' => 'required|string',
            'permanent_address' => 'required|string',
        ]);



        DB::beginTransaction();
        try {
            if (!$request->hasFile('profile_photo')) {
                $userField['profile_photo'] = '/logo.png';
            } else {
                $userField['profile_photo'] = $request->file('profile_photo')->storePublicly('profiles/students', 'public');
            }

            $user = User::create($userField);
            DB::commit();
            event(new Registered($user));
            Auth::login($user);

            return redirect(RouteServiceProvider::HOME);
        } catch (\Throwable $th) {
            DB::rollback();
            return back()->withErrors(['error' => 'An error occurred while registering. Please try again.']);
        }
    }
}
