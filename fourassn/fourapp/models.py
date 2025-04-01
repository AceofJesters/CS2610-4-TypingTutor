from django.db import models

# Create your models here.

class PromptString(models.Model):
    id = models.AutoField(primary_key=True)
    prompt = models.TextField()

    def __str__(self):
        return self.prompt