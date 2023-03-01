import { Component } from '@angular/core';
import { LudoService } from './ludo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private ludoService: LudoService) {}

  public buttonEnabled = false;
  blue_span_ele = `<div onClick="console.log('f')" style="
  background-color: deepskyblue;
    border-radius: 100%;
    height: 45px;
    width: 45px;
    float: left;
    background-size: contain;"></div>`;

  red_span_ele = `<div style="
  background-color: indianred;
    border-radius: 100%;
    height: 45px;
    width: 45px;
    float: left;
    background-size: contain;"></div>`;

  green_span_ele = `<div style="
  background-color: lightgreen;
    border-radius: 100%;
    height: 45px;
    width: 45px;
    float: left;
    background-size: contain;"></div>`;

  yellow_span_ele = `<div style="
  background-color: rgb(214, 236, 84);
    border-radius: 100%;
    height: 45px;
    width: 45px;
    float: left;
    background-size: contain;"></div>`;

  red_start = 13;
  yellow_start = 39;
  green_start = 26;
  blue_start = 0;

  red_current = 13;
  yellow_current = 39;
  green_current = 26;
  blue_current = 0;

  blue_turn = true;
  red_turn = false;
  green_turn = false;
  yellow_turn = false;

  distance_traveled = [0, 0, 0, 0];

  cellList = this.ludoService.getCellValues();
  prev_val = [
    this.blue_current,
    this.red_current,
    this.green_current,
    this.yellow_current,
  ];

  diceVal!: number;
  movePiece() {
    let dice = this.ludoService.diceValue();
    this.diceVal = dice;
    if (this.blue_turn) {
      if (dice == 6 && this.blue_current == this.blue_start) {
      }
      let cellName;
      console.log('Blue Dice value = ' + dice);
      if (this.distance_traveled[0] + dice > 50) {
        return this.checkHome(0, dice);
      } else {
        cellName = this.cellList[this.prev_val[0]];
        document.getElementById(cellName)!.innerHTML = '';
      }

      this.blue_current = (this.blue_current + dice) % 52;

      this.distance_traveled[0] += dice;
      cellName = this.cellList[this.blue_current];
      console.log('blue ', cellName);
      document.getElementById(cellName)!.innerHTML = this.blue_span_ele;

      this.prev_val[0] = this.blue_current;
      this.blue_turn = false;
      this.red_turn = true;
      return;
    }
    if (this.red_turn) {
      let dice = this.ludoService.diceValue();
      let cellName;
      console.log('Red Dice value = ' + dice);

      if (this.distance_traveled[1] + dice > 50) {
        return this.checkHome(1, dice);
      } else {
        cellName = this.cellList[this.prev_val[1]];
        document.getElementById(cellName)!.innerHTML = '';
      }

      this.red_current = (this.red_current + dice) % 52;
      this.distance_traveled[1] += dice;
      cellName = this.cellList[this.red_current];
      console.log('red ', cellName);
      document.getElementById(cellName)!.innerHTML = this.red_span_ele;

      this.prev_val[1] = this.red_current;
      this.green_turn = true;
      this.red_turn = false;
      return;
    }
    if (this.green_turn) {
      let dice = this.ludoService.diceValue();
      let cellName;

      console.log('Green Dice value = ' + dice);
      if (this.distance_traveled[2] + dice > 50) {
        return this.checkHome(2, dice);
      } else {
        cellName = this.cellList[this.prev_val[2]];
        document.getElementById(cellName)!.innerHTML = '';
      }

      this.green_current = (this.green_current + dice) % 52;
      this.distance_traveled[2] += dice;
      cellName = this.cellList[this.green_current];
      console.log('green ', cellName);
      document.getElementById(cellName)!.innerHTML = this.green_span_ele;

      this.prev_val[2] = this.green_current;
      this.yellow_turn = true;
      this.green_turn = false;
      return;
    }
    if (this.yellow_turn) {
      let dice = this.ludoService.diceValue();
      let cellName;

      console.log('Yellow Dice value = ' + dice);
      if (this.distance_traveled[3] + dice > 50) {
        return this.checkHome(3, dice);
      } else {
        cellName = this.cellList[this.prev_val[3]];
        document.getElementById(cellName)!.innerHTML = '';
      }

      this.yellow_current = (this.yellow_current + dice) % 52;
      this.distance_traveled[3] += dice;
      cellName = this.cellList[this.yellow_current];
      console.log('yellow ', cellName);
      document.getElementById(cellName)!.innerHTML = this.yellow_span_ele;

      this.prev_val[3] = this.yellow_current;
      this.yellow_turn = false;
      this.blue_turn = true;
      console.log(this.distance_traveled);
      return;
    }
  }

  checkHome(c: number, dice: number) {
    if (c == 0) {
      let cellCount = this.distance_traveled[0] + dice;
      this.blue_turn = false;
      this.red_turn = true;
      let newCellName;
      if (cellCount > 56) {
        return;
      } else if (cellCount == 56) {
        this.buttonEnabled = !this.buttonEnabled;
        newCellName = this.ludoService.blueHomePath[this.distance_traveled[0]];
        document.getElementById(newCellName)!.innerHTML = '';
        setTimeout(() => {
          alert('Player 1 wins');
        }, 500);
      } else {
        if (this.distance_traveled[0] > 50) {
          newCellName =
            this.ludoService.blueHomePath[this.distance_traveled[0]];
          document.getElementById(newCellName)!.innerHTML = '';
        } else {
          newCellName = this.cellList[this.prev_val[0]];
          document.getElementById(newCellName)!.innerHTML = '';
        }
        this.distance_traveled[0] = cellCount;
        newCellName = this.ludoService.blueHomePath[cellCount];
        document.getElementById(newCellName)!.innerHTML = this.blue_span_ele;
        this.prev_val[0] = cellCount;
      }
      this.distance_traveled[0] = cellCount;
    }
    if (c == 1) {
      let cellCount = this.distance_traveled[1] + dice;
      let newCellName;
      this.red_turn = false;
      this.green_turn = true;
      if (cellCount > 56) {
        return;
      } else if (cellCount == 56) {
        this.buttonEnabled = !this.buttonEnabled;
        newCellName =
          this.ludoService.redHomePath[this.distance_traveled[1]];
        document.getElementById(newCellName)!.innerHTML = '';
        setTimeout(() => {
          alert('Player 2 wins');
        }, 500);
      } else {
        if (this.distance_traveled[1] > 50) {
        newCellName =
          this.ludoService.redHomePath[this.distance_traveled[1]];
        document.getElementById(newCellName)!.innerHTML = '';
      } else {
        newCellName = this.cellList[this.prev_val[1]];
        document.getElementById(newCellName)!.innerHTML = '';
      }
        this.distance_traveled[1] = cellCount;
        newCellName = this.ludoService.redHomePath[cellCount];
        document.getElementById(newCellName)!.innerHTML = this.red_span_ele;
        this.prev_val[1] = cellCount;
      }
      this.distance_traveled[1] = cellCount;
    }
    if (c == 2) {
      let cellCount = this.distance_traveled[2] + dice;
      this.green_turn = false;
      this.yellow_turn = true;
      let newCellName;
      if (cellCount > 56) {
        return;
      } else if (cellCount == 56) {
        this.buttonEnabled = !this.buttonEnabled;
        newCellName =
          this.ludoService.greenHomePath[this.distance_traveled[2]];
        document.getElementById(newCellName)!.innerHTML = '';
        setTimeout(() => {
          alert('Player 3 wins');
        }, 500);
      } else {
        if (this.distance_traveled[2] > 50) {
          newCellName =
            this.ludoService.greenHomePath[this.distance_traveled[2]];
          document.getElementById(newCellName)!.innerHTML = '';
        } else {
          newCellName = this.cellList[this.prev_val[2]];
          document.getElementById(newCellName)!.innerHTML = '';
        }
        this.distance_traveled[2] = cellCount;
        newCellName = this.ludoService.greenHomePath[cellCount];
        document.getElementById(newCellName)!.innerHTML = this.green_span_ele;
        this.prev_val[2] = cellCount;
      }
      this.distance_traveled[2] = cellCount;
    }
    if (c == 3) {
      let cellCount = this.distance_traveled[3] + dice;
      this.yellow_turn = false;
      this.blue_turn = true;
      let newCellName;
      if (cellCount > 56) {
        return;
      } else if (cellCount == 56) {
        this.buttonEnabled = !this.buttonEnabled;
        newCellName =
          this.ludoService.yellowHomePath[this.distance_traveled[3]];
        document.getElementById(newCellName)!.innerHTML = '';
        setTimeout(() => {
          alert('Player 4 wins');
        }, 500);
      } else {
        if (this.distance_traveled[3] > 50) {
          newCellName =
            this.ludoService.yellowHomePath[this.distance_traveled[3]];
          document.getElementById(newCellName)!.innerHTML = '';
        } else {
          newCellName = this.cellList[this.prev_val[3]];
          document.getElementById(newCellName)!.innerHTML = '';
        }
        this.distance_traveled[3] = cellCount;
        newCellName = this.ludoService.yellowHomePath[cellCount];
        document.getElementById(newCellName)!.innerHTML = this.yellow_span_ele;
        this.prev_val[3] = cellCount;
      }
      console.log(this.distance_traveled);
      this.distance_traveled[3] = cellCount;
    }
  }
}
