from django.contrib import auth
from django.shortcuts import render, redirect
from accounts.models import CustomUser


def sign(request):
    if request.method=="POST":
        if 'email' in request.POST:
            return signup(request)
        else:
            return login(request)
    else:
        return render(request, 'accounts/index.html')


# Create your views here.
def login(request):
    username = request.POST['username']
    password = request.POST['password']
    user = auth.authenticate(
        request,
        username=username,
        password=password
    )
    if user is not None:
        auth.login(request, user)
        return redirect('chat:index')
    else:
        return render(request, 'accounts/index.html')


def signup(request):
    if request.POST["password"]==request.POST["password2"]:
        user = CustomUser.objects.create_user(
            email=request.POST["email"],
            username=request.POST["username"],
            password=request.POST["password"],
        )
        return redirect('accounts:login')

    else:
        # return error message
        raise ValueError("Password unmatched.")


def logout(request):
    auth.logout(request)
    return redirect('accounts:login')
