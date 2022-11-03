<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateContactRequest;
use App\Models\Contact;
use Illuminate\Http\Request;
use App\Http\Resources\ContactCollection;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreContactRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'string|required',
            'email' => 'email|required',
            'message' => 'string',
            'kvkk' => 'nullable'
        ]);
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }
        $validated = $validator->validated();
        $validated['ip'] = $request->ip();
        $validated['kvkk'] = isset($validated['kvkk']);
        $contact = Contact::create($validated);
        return response()->json(['Başarılı ile oluşturuldu', $contact], 201);
    }
}
