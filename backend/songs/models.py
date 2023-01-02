from django.db import models

# Create your models here.

class Song(models.Model):
    title = models.CharField(max_length = 20)
    artist = models.CharField(max_length = 20)
    album = models.CharField(max_length = 20)
    release_date = models.DateField()
    genre = models.CharField(max_length = 20)

    def __str__(self):
        return self.title