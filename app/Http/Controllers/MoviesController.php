<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Movie;
use App\Models\MoviesRating;
use Auth;
class MoviesController extends Controller
{
    // Create a new movie
    public function store(Request $request)
    {
//        dd($request->all());
        $data = $request->validate([
            'title' => 'required',
            'director' => 'required',
            'country' => 'required',
            'awards' => 'required',
            'year' => 'required',
            'rated' => 'required',
            'released' => 'required',
            'runtime' => 'required',
            'genre' => 'required',
            'category_id' => 'required|exists:categories,id',
        ]);
     //   dd($data);
     $data['genre']=json_encode($data['genre']);
     $data['type']='movie';
      // $movie = Movie::create($data);
        $movie = Movie::insert($data);

        return response()->json($movie, 201);
    }

    // Read all movies with category information
    public function index()
    {
        $movies = Movie::with('category')->paginate(10);
        return response()->json($movies, 200);
    }
    public function view()
    {

        $movies = Movie::with('category')->paginate(10);
        $movies = $movies->map(function ($movie) {
          $temp=json_decode($movie->ratings);
          array_push($temp,['source'=>'Movies Hub','value'=>$movie->total_rating,'total'=>5,'count'=>$movie->ratings_count]);
          $movie->ratings=$temp;
          $movie->genre=json_decode($movie->genre);
            return $movie;
        });
        return response()->json($movies, 200);
    }

    // Read a single movie with category information
    public function show($id)
    {
        $movie = Movie::with('category')->find($id);

        if (!$movie) {
            return response()->json(['error' => 'Movie not found'], 404);
        }
        $temp=json_decode($movie->ratings);
        array_push($temp,['source'=>'Movies Hub','value'=>$movie->total_rating,'total'=>5,'count'=>$movie->ratings_count]);
        $movie->ratings=$temp;
        return response()->json($movie, 200);
    }

    // Update a movie
    public function update(Request $request, $id)
    {
        $movie = Movie::find($id);

        if (!$movie) {
            return response()->json(['error' => 'Movie not found'], 404);
        }

        $data = $request->validate([
            'title' => 'required',
            'director' => 'required',
            'country' => 'required',
            'awards' => 'required',
            'category_id' => 'required|exists:categories,id',
        ]);
        Movie::where('id',$id)->update($data);
        //$movie->update($data);

        return response()->json($movie, 200);
    }

    // Delete a movie
    public function destroy($id)
    {
        $movie = Movie::find($id);

        if (!$movie) {
            return response()->json(['error' => 'Movie not found'], 404);
        }

        $movie->delete();

        return response()->json(['message' => 'Movie deleted'], 204);
    }
    public function addRating(Request $request ){
        $exist =MoviesRating::where(['user_id'=> Auth::id(),'movie_id'=>$request->id])->exists();
if($exist){
    return response()->json(['message' => 'Already Rating Submitted'], 403);
}

        $data = ['user_id'=>Auth::id(),'movie_id'=>$request->id,'rating'=>$request->rating];
       // dd($data);
        MoviesRating::insert($data);
        return response()->json(['message' => 'Successfully added rating'], 200);
    }


}
