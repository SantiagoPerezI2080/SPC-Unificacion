from rest_framework import viewsets
from .serializer import TaskSerializaer
from .models import Task

# Create your views here.
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializaer
    queryset = Task.objects.all()