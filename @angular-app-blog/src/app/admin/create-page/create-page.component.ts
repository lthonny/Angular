import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IPost } from 'src/app/shared/interfaces';
import { PostsService } from 'src/app/shared/posts.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  form: FormGroup = new FormGroup({
    title: new FormControl(null, [
      Validators.required
    ]),
    text: new FormControl(null, [
      Validators.required,
    ]),
    author: new FormControl(null, [
      Validators.required
    ]),
  });

  constructor(
    private router: Router,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const post: IPost = {
      title: this.form.value.title,
      text: this.form.value.text,
      author: this.form.value.author,
      date: new Date()
    }

    this.postsService.create(post).subscribe(() => {
      this.form.reset();
    })
  }
}
