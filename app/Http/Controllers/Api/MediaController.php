<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MediaController extends Controller
{
    public function all()
    {
        $images = is_dir(storage_path('app/public/images')) ? $this->scan(storage_path('app/public/images')) : [];
        $videos = is_dir(storage_path('app/public/videos')) ? $this->scan(storage_path('app/public/videos')) :  [];
        return response()->json(
            [
                'images' => $images,
                'videos' => $videos
            ],
            200,
            [],
            JSON_UNESCAPED_UNICODE
        );
    }
    private function scan($dir)
    {
        $path = explode("/", $dir);
        $path = end($path);
        $vals = array_values(array_diff(scandir($dir), array('..', '.')));
        $vals = array_map(function ($val) use ($path) {
            return url(sprintf("storage/%s/%s", $path, $val));
        }, $vals);
        return $vals;
    }
}
