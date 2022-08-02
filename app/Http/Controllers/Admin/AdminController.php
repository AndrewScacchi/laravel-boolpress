<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    // Non è necessaria se si mette il middleware nel web.php
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    // Show the application dashboard.
    public function dashboard()
    {
        $user = Auth::user();
        // dump($user->toArray());
        // dump(Auth::check());
        return view('admin.dashboard');
    }
}
