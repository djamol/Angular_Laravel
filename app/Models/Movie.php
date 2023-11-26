<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\MoviesRating;

class Movie extends Model
{
    use HasFactory;
protected $fillable = ['title', 'genre','category_id'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function ratings()
    {
        return $this->hasMany(MoviesRating::class);
    }

    public function checkRating($userId)
    {
        $alreadyRated = $this->ratings()->where('user_id', $userId)->exists();
        return $alreadyRated;
    }
    public function getRatingsCountAttribute()
    {
        return $this->ratings()->count();
    }

    public function getTotalRatingAttribute()
    {
        $totalRating = $this->ratings()->sum('rating');
       // dd($totalRating);
        $totalUsers = $this->ratings()->count('user_id');

        if ($totalUsers > 0) {
            $totalUsers=$totalUsers*5;
            return round($totalRating / $totalUsers*5, 2);
        }

        return 0;
    }
}
