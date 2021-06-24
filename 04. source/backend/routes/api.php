<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HouseController;
use App\Http\Requests\HouseRequest;
use App\Http\Controllers\RoleController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



Route::prefix('/role')->group(function () {
    Route::get('/list', [RoleController::class, 'getAll']);
    Route::delete('/list/{id}', [RoleController::class, 'deleteRole']);
    Route::get('/edit/{id}', [RoleController::class, 'findRole']);
    Route::post('/update/{id}',[RoleController::class,'updateRole']);

});
