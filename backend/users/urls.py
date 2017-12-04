from django.conf.urls import url, include
from django.contrib.auth import views as auth_views
# from rest_framework import routers

from users import views
from powermitra.settings import dev

urlpatterns = [
    # url(r'^users/', include(user_urls)),
    url(r'^users/list/$', views.UsersList.as_view()),
    # url(r'^login/', auth_views.login, {'template_name': 'index.html'}, name='login'),
    url(r'^login/', views.UserLogin.as_view()),
    url(r'^epc/list/', views.EPCList.as_view()),
    url(r'^investor/list/', views.InvestorList.as_view()),
    url(r'^project/list/(?P<id>[0-9]+)/$', views.ProjectList.as_view()),
    url(r'^inactiveuser/(?P<id>[0-9]+)/$', views.UpdateUserStatus.as_view(), name='inactive-user'),
    url(r'^password/reset/$', views.UserPasswordReset.as_view(), name="password_reset"),
    url(r'^password/modify/$', views.ModifyUserPassword.as_view(), name="password_modify"),
    url(r'^users/register/$', views.RegisterUserView.as_view()),
    url(r'^consumerepc/list/(?P<id>[0-9]+)/$', views.ConsumerEPCList.as_view()),

    url(r'^epcreview/(?P<id>[0-9]+)/$', views.ConsumerWithEPCReview.as_view()),

]


if dev.DEBUG:
    import debug_toolbar
    urlpatterns += [
        url(r'^__debug__/', include(debug_toolbar.urls)),
    ]