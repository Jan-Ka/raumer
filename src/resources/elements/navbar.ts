export class Navbar {
  active: boolean;

  public onBurgerClickDelegate() {
    this.active = !this.active;
  }
}
