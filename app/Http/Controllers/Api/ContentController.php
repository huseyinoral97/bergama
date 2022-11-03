<?php

namespace App\Http\Controllers\Api;

use TCG\Voyager\Models\Post;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use TCG\Voyager\Models\Category;
use TCG\Voyager\Models\Page;
use App\Models\Widget;
use App\Models\Certificate;
use App\Models\Product;
use App\Models\Slider;

class ContentController extends Controller
{
    public function all(Request $request) {
        $posts = Post::all();
        $posts = $posts->translate($request->api_pref_lang);
        $posts = $posts->map(function ($post) {
            $post->image = url(
                sprintf(
                    "storage/%s",
                    str_replace('\\', '/', $post->image)
                )
            );
            $post->images = array_map(function($image){
                $image = url(
                    sprintf(
                        "storage/%s",
                        str_replace('\\', '/', $image)
                    )
                );
                return $image;
            }, json_decode($post->images) ?? []);
            return $post;
        });
        return response()->json($posts);
    }
    public function product(string $seo_url, Request $request)
    {
        $product = Product::where('slug', $seo_url)->first();
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }
        $product = $product->translate($request->api_pref_lang);
        $product->cover_photo = url(
            sprintf(
                "storage/%s",
                str_replace('\\', '/', $product->cover_photo)
            )
        );
        $product->photos = array_map(function($photo){
            $image = url(
                sprintf(
                    "storage/%s",
                    str_replace('\\', '/', $photo)
                )
            );
            return $image;
        }, json_decode($product->photos) ?? []);
        return response()->json($product);
    }
    public function products(Request $request) {
        $products = Product::all();
        $products = $products->translate($request->api_pref_lang);
        $products = $products->map(function ($product) {
            $product->cover_photo = url(
                sprintf(
                    "storage/%s",
                    str_replace('\\', '/', $product->cover_photo)
                )
            );
            $product->photos = array_map(function($photo){
                $image = url(
                    sprintf(
                        "storage/%s",
                        str_replace('\\', '/', $photo)
                    )
                );
                return $image;
            }, json_decode($product->photos) ?? []);
            return $product;
        });
        return response()->json($products);
    }
    public function certificates(Request $request) {
        $certs = Certificate::all();
        $certs = $certs->map(function ($cert) {
            $cert->image = url(
                sprintf(
                    "storage/%s",
                    str_replace('\\', '/', $cert->image)
                )
            );
            return $cert;
        });
        return response()->json($certs);
    }
    public function sliders(Request $request) 
    {
        $sliders = Slider::all();
        $sliders = $sliders->translate($request->api_pref_lang);
        $sliders = $sliders->map(function ($slider) {
            $slider->image = url(
                sprintf(
                    "storage/%s",
                    str_replace('\\', '/', $slider->image)
                )
            );
            return $slider;
        });
        return response()->json($sliders);
    }
    public function fetch(string $slug, Request $request)
    {
        $validated = Validator::make(
            [
                'slug' => $slug
            ],
            [
                'slug' => 'string|required'
            ]
        );
        if ($validated->failed()) {
            return response()->json('Bir hata oluştu', 400);
        }
        $slug = $validated->validated()['slug'];
        $post = Post::whereTranslation('slug', '=', $slug)->firstOrFail();
        $post = $post->translate($request->api_pref_lang);
        $post->image = url(
                sprintf(
                    "storage/%s",
                    str_replace('\\', '/', $post->image)
                )
        );
        return response()->json($post, 200, [], JSON_UNESCAPED_UNICODE);
    }
    public function fetchPage(string $slug, Request $request)
    {
        $validated = Validator::make(
            [
                'slug' => $slug
            ],
            [
                'slug' => 'string|required'
            ]
        );
        if ($validated->failed()) {
            return response()->json('Bir hata oluştu', 400);
        }
        $slug = $validated->validated()['slug'];
        $page = Page::whereTranslation('slug', '=', $slug)->firstOrFail();
        $page = $page->translate($request->api_pref_lang);
        $page->image = url(
                sprintf(
                    "storage/%s",
                    str_replace('\\', '/', $page->image)
                )
        );
        return response()->json($page, 200, [], JSON_UNESCAPED_UNICODE);
    }
}
