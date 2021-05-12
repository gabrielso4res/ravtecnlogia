package com.teste

class Grupo {
    String name;
    static hasMany = [todo: Todo];


    static constraints = {
        name size: 0..10, blank: false;
    }

    String toString(){
        name;
    }
}
