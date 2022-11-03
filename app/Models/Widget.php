<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Translatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Widget extends Model
{
    use HasFactory, Translatable;
    protected $translatable = ['title', 'body'];    
}
