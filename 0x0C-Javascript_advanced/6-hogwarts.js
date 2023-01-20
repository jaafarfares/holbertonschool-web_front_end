class studentHogwarts {

    privateScore = 0;
    name = null;

  #changeScoreBy = function (points){
    this.privateScore += points;
  }
  setName(newName){
    this.name = newName;
  }

  rewardStudent(){
    this.#changeScoreBy(1);
  }
  penalizeStudent(){
    this.#changeScoreBy(-1);
  }
  getScore(){
    return `${this.name}: ${this.privateScore}`;
  }


}

const Harry = new studentHogwarts();
Harry.setName("Harry");
Harry.rewardStudent();
Harry.rewardStudent();
Harry.rewardStudent();
Harry.rewardStudent();

const Draco = new studentHogwarts();
Draco.setName("Draco");
Draco.rewardStudent(1);
Draco.penalizeStudent();
Draco.penalizeStudent();
Draco.penalizeStudent();


console.log(Harry.getScore());
console.log(Draco.getScore());

