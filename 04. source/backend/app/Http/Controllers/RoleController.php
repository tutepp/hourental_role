<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use App\Models\Product;
use App\Models\Role;


class RoleController extends Controller
{
    public function getAll()
    {
        $role = Role::all();
        return response()->json($role);
    }
    public function deleteRole($id)
    {
        $role = Role::find($id);
        $role->delete();
        $roles = Role::all();
        return response()->json($roles);
    }
    public function findRole($id)
    {
        $role= Role::find($id);

        return response()->json($role);
    }
    public function updateRole(Request $request, $id ){
        $role = Role::findOrFail($id);
        $role->name = $request->name;
        $role->description = $request->description;
        $role->save();
        return response()->json($role);
    }

    public function strore()
    {

    }




}
