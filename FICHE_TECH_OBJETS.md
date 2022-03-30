# Fiche technique sur les objets Set, Map, WeakSet et WeakMap

Voici une fiche technique résumant l'ensemble des fonctions liées aux objets Set, Map, WeakSet et WeakMap.



## L'objet Set

Créer un objet Set

```js
let monObjet = new Set();
// ou
let monObjet = new Set(['un', 'deux', 'trois']);
```

Ajouter un élément

```js
monObjet.add('quatre');
```
Supprimer un élément

```js
monObjet.delete('quatre');
```

Supprimer tous les éléments

```js
monObjet.clear();
```

Avoir la taille de l'objet (le nombre d'éléments)

```js
monObjet.size;
```

Vérifier si un élément existe (renvoie donc true ou false)

```js
monObjet.has('un');
```

Retourner tous les éléments

```js
monObjet.values();
// ou
monObjet.keys();
```


## L'objet Map

Créer un objet Map

```js
let monObjet = new Map();
```

Ajouter un élément

```js
monObjet.set('John Doe', {
    email: 'john@doe.com',
});
```

Supprimer un élément

```js
monObjet.delete('John Doe');
```

Supprimer tous les éléments

```js
monObjet.clear();
```

Vérifier si un élément existe (renvoie donc true ou false)

```js
monObjet.has('John Doe');
```

Retourner un élément

```js
monObjet.get('John Doe');
```

Retourner tous les éléments

```js
monObjet.values();
// ou
monObjet.keys();
```


## L'objet WeakSet

Créer un objet WeakSet

```js
let monObjet = new WeakSet();
// ou
let monObjet = new WeakSet([objet1, objet2, objet3]);
```

Ajouter un élément

```js
monObjet.add(objet4);
```

Supprimer un élément

```js
monObjet.delete(objet4);
```

Avoir la taille de l'objet (le nombre d'éléments)

```js
monObjet.length();
```

Vérifier si un élément existe (renvoie donc true ou false)

```js
monObjet.has(objet4);
```


## L'objet WeakMap

Créer un objet WeakMap

```js
let monObjet = new WeakMap();
```

Ajouter un élément

```js
const objet1 = {
    nom: 'John Doe',
}
 
monObjet.set(objet1, {
    email: 'john@doe.com',
});
```

Supprimer un élément

```js
monObjet.delete(objet1);
```

Avoir la taille de l'objet (le nombre d'éléments)

```js
monObjet.length();
```

Vérifier si un élément existe (renvoie donc true ou false)

```js
monObjet.has(objet1);
```

Retourner un élément

```js
monObjet.get(objet1);
```
