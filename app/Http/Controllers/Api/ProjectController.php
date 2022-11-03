<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;

class ProjectController extends Controller
{
    public function all(Request $request)
    {
        $projects = Project::all();
        $projects = $projects->translate($request->api_pref_lang);
        $projects->map(function ($project) {
            $project->cover_photo = url(
                sprintf(
                    "storage/%s",
                    str_replace('\\', '/', $project->image)
                )
            );
            $project->id = null;
            $project->image = null;
        });
        return response()->json($projects);
    }
}
