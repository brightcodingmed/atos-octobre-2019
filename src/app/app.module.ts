import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { TableComponent } from './table/table.component';
import { LayoutComponent } from './layout/layout.component';
import { VotesComponent } from './votes/votes.component';
import { GitusersComponent } from './gitusers/gitusers.component';
import { PostsComponent } from './posts/posts.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  { path: "", redirectTo: '/github', pathMatch: 'full' },
  { path: "github", component: GitusersComponent },
  { path: "posts", component: PostsComponent },
  { path: "courses", component: CoursesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    TableComponent,
    LayoutComponent,
    VotesComponent,
    GitusersComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
