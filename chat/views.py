from django.contrib.auth.decorators import login_required
from django.shortcuts import render


# Create your views here.
@login_required(login_url='accounts:login')
def index(request):
    return render(request, 'chat/index.html')


@login_required(login_url='accounts:login')
def room(request, room_name):
    return render(request, 'chat/room.html', {
        'room_name': room_name
    })

