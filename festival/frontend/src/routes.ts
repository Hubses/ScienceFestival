import {Routes} from '@angular/router';
import {
  AppComponent,
  CommonComponent,
  MasterPageComponent,
  FullFeedComponent,
  NewsFeedComponent,
  WorksFeedComponent,
  EventsFeedComponent,
  CalendarComponent,
  PersonalComponent,
  AdminDashboardComponent,
  ApproveComponent,
  AdminStatisticComponent,
} from 'app/containers';
import {
  LoginComponent,
  RegisterComponent,
  AboutComponent,
  NotFoundComponent,
  NewsDetailComponent,
  NewsEditorComponent,
  NewsCreaterComponent
} from "app/components";

export const appRoutes: Routes = [
  {
    path: ':lang', component: AppComponent, data: {lang: 'en'},
    children: [
      {
        path: ':role', component: AppComponent, data: {role: 'admin'},
        children: [
          {path: 'common', component: CommonComponent},
          {
            path: 'feed', component: MasterPageComponent, children: [
            {path: '', component: FullFeedComponent},
            {path: 'news', component: NewsFeedComponent},
            {path: 'news/create', component: NewsCreaterComponent},
            {path: 'news/:id', component: NewsDetailComponent},
            {path: 'news/edit/:id', component: NewsEditorComponent},
            {path: 'events', component: EventsFeedComponent},
            {path: 'works', component: WorksFeedComponent},
          ]
          },
          {
            path: 'calendar', component: MasterPageComponent, children: [
            {path: '', component: CalendarComponent}
          ]
          },
          {
            path: 'personal', component: MasterPageComponent, children: [
            {path: '', component: PersonalComponent}
          ]
          },
          {
            path: 'login', component: MasterPageComponent, children: [
            {path: '', component: LoginComponent}
          ]
          },
          {
            path: 'register', component: MasterPageComponent, children: [
            {path: '', component: RegisterComponent}
          ]
          },
          {
            path: 'dashboard', component: MasterPageComponent, children: [
            {path: '', component: AdminDashboardComponent}
          ]
          },
          {
            path: 'statistic', component: MasterPageComponent, children: [
            {path: '', component: AdminStatisticComponent}
          ]
          },
          {
            path: 'approve', component: MasterPageComponent, children: [
            {path: '', component: ApproveComponent}
          ]
          },
          {
            path: 'about', component: MasterPageComponent, children: [
            {path: '', component: AboutComponent}
          ]
          },
        ]
      }
    ]
  },
  {path: '', pathMatch: 'full', redirectTo: '/en/admin/feed'},
  {path: '**', component: NotFoundComponent}
];
