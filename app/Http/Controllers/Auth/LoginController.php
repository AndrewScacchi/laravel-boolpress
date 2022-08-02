<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    // per cambiare la pagina di destinazione dopo essersi sloggati
    protected function loggedOut(Request $request)
    {
        return redirect()->route('login');
    }

    // per cambiare id dati richiesti per loggarsi (es email o username)
    // la funzione si deve chiamare username
    // aggiornare anche il blade di conseguenza
    public function username()
    {
        return 'name'; // questo deve coincidere con nome della colonna nel database
    }
}
