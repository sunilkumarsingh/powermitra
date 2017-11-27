from django.conf.urls import url, include
from django.contrib.auth import views as auth_views
# from rest_framework import routers

from users import views
from powermitra.settings import dev

urlpatterns = [
    # url(r'^users/', include(user_urls)),
    url(r'^users/list/$', views.LoggedUserList.as_view()),
    # url(r'^login/', auth_views.login, {'template_name': 'index.html'}, name='login'),
    url(r'^login/', views.UserLogin.as_view()),
]


if dev.DEBUG:
    import debug_toolbar
    urlpatterns += [
        url(r'^__debug__/', include(debug_toolbar.urls)),
    ]