<?php

namespace App\Http\Controllers\Api;

use App\Models\Cv;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;
use App\Mail\IkFormRecieved;

class CvController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'string|required',
                'mail' => 'string|email|required',
                'phone' => 'string|required',
                'tc' => 'integer|required',
                'birthday_place' => 'string|required',
                'birthday' => 'date|required',
                'gender' => 'string|required',
                'size' => 'integer|required',
                'weight' => 'integer|required',
                'adress' => 'string|required',
                'drivers_license' => 'string|required',
                'src' => 'string|required',
                'family_name' => 'string|required',
                'family_degree' => 'string|required',
                'family_phone' => 'string|required',
                'home_rent' => 'string|required',
                'criminal_record' => 'string|required',
                'military' => 'string|required',
                'year_of_discharge' => 'string|required',
                'marital_status' => 'string|required',
                'child_number' => 'integer|required',
                'wife_name' => 'string|required',
                'alcohol' => 'string|required',
                'university_name' => 'string|required',
                'university_department' => 'string|required',
                'graduation_date' => 'date|required',
                'university_degree' => 'string|required',
                'high_school_name' => 'string|required',
                'high_school_graduation_date' => 'date|required',
                'primary_education_name' => 'string|required',
                'primary_education_graduation_date' => 'date|required',
                'primary_education_degree' => 'string|required',
                'language' => 'string|required',
                'language_level' => 'string|required',
                'computer' => 'string|required',
                'computer_other' => 'string|required',
                'seminar_names' => 'string|required',
                'course_topics' => 'string|required',
                'course_time' => 'string|required',
                'course_degree' => 'string|required',
                'company_name' => 'string|required',
                'company_task' => 'string|required',
                'company_salary' => 'string|required',
                'company_work_time' => 'string|required',
                'company_left' => 'string|required',
                'referance_name' => 'string|required',
                'referance_company' => 'string|required',
                'referance_task' => 'string|required',
                'referance_phone' => 'string|required',
                'court' => 'string|required',
                'health_problem' => 'string|required',
                'covid' => 'string|required',
                'shift' => 'string|required',
                'overtime' => 'string|required',
                'travel' => 'string|required',
                'job_start_time' => 'date|required',
                'know_someone' => 'string|required',
                'positions' => 'required|string',                
            ]
        );
        $file = $request->get('cv');
        @list($type, $file_data) = explode(';', $file);
        @list(, $file_data) = explode(',', $file_data);
        $cv = base64_decode($file_data);
        $query = "JVBERi0";
        if(substr(base64_encode($cv), 0, strlen($query) ) !== $query) {
            return response()->json("File should be pdf", 400);
        }
        $safeName = Str::uuid() . '.' . 'pdf';
        Storage::disk('public')->put($safeName, $cv);
        if ($validator->fails()) {
            return response()->json(
                $validator->errors()->toArray(),
                400
            );
        }
        $data = $validator->validated();
        $data['cv'] = $safeName;
        $data['ip'] = $request->ip();
        $data = Cv::create($data);
        Mail::to("bilgi@ahtapotweb.com")->send(new IkFormRecieved());
        return response()->json($data->makeHidden(['id', 'ip', 'updated_at', 'created_at', 'cv', 'tc']), 201);
    }
}
