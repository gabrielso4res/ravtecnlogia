package com.teste

class Todo {
    String description;
    static belongsTo = [grupo: Grupo];

    static constraints = {
        description size: 4..60, blank: false;
    }

    String toString(){
        description;
    }
}
