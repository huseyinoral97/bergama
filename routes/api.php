<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('/contact', [\App\Http\Controllers\ContactController::class, 'store']);
Route::middleware('lang')->get('/page/{slug}', [\App\Http\Controllers\Api\ContentController::class, 'fetchPage']);
Route::middleware('lang')->get('/posts', [\App\Http\Controllers\Api\ContentController::class, 'all']);
Route::middleware('lang')->get('/posts/{slug}', [\App\Http\Controllers\Api\ContentController::class, 'fetch']);
Route::middleware('lang')->get('/projects', [\App\Http\Controllers\Api\ProjectController::class, 'all']);
Route::middleware('lang')->get('/products', [\App\Http\Controllers\Api\ContentController::class, 'products']);
Route::middleware('lang')->get('/products/{slug}', [\App\Http\Controllers\Api\ContentController::class, 'product']);
Route::post('/hr/send', [\App\Http\Controllers\Api\CvController::class, 'store']);
Route::get('/media', [\App\Http\Controllers\Api\MediaController::class, 'all']);
Route::get('/certificates', [\App\Http\Controllers\Api\ContentController::class, 'certificates']);

Route::middleware('lang')->get('/slider', [\App\Http\Controllers\Api\ContentController::class, 'sliders']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
