<?php

namespace App\Http\Middleware;

use Closure;
use App\Enums\UserRole;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AdminCheck
{

    public function handle(Request $request, Closure $next): Response
    {
        if (Auth::user()?->role == UserRole::admin) {
            return $next($request);
        } else {
            abort(403);
        }
    }
}
