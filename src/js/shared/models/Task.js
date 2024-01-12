export class Task {
  constructor(id, name, createdAt, finishedAt) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.finishedAt = finishedAt;
    this.openned = finishedAt == null;
  }
}
