import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./pages/contactos/lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'crear',
    loadChildren: () => import('./pages/contactos/crear/crear.module').then( m => m.CrearPageModule)
  },
  {
    path: 'update/:nombre/:telefono/:mail',
    loadChildren: () => import('./pages/contactos/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'github',
    loadChildren: () => import('./pages/github/github.module').then( m => m.GithubPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
