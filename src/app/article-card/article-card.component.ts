import { Component, Input } from '@angular/core';
import { Article } from '../article.model';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.css',
  standalone: false,
})
export class ArticleCardComponent {
  @Input() article!: Article;
  likes = 0;
  commentsOpen = false;
  draft = '';
  error = false;
  comments: { id: number; text: string }[] = [];
  private nextId = 1;

  like(): void {
    this.likes += 1;
  }

  toggleComments(): void {
    this.commentsOpen = !this.commentsOpen;
  }

  onDraft(event: Event): void {
    this.draft = (event.target as HTMLInputElement).value;
    if (this.error && this.draft.trim()) this.error = false;
  }

  publish(event: Event): void {
    event.preventDefault();
    const text = this.draft.trim();
    if (!text) {
      this.error = true;
      return;
    }
    this.comments = [...this.comments, { id: this.nextId, text }];
    this.nextId += 1;
    this.draft = '';
    this.error = false;
  }
}
