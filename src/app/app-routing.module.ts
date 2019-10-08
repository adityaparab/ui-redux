import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EditorComponent } from './components/editor/editor.component';

const BaseRoute: Route = {
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
};

const HomeRoute: Route = {
  path: 'home',
  component: HomeComponent
};

const EditorRoute: Route = {
  path: 'editor',
  component: EditorComponent
};

const routes: Routes = [
  BaseRoute,
  HomeRoute,
  EditorRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
