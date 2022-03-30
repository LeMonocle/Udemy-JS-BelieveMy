# Fiche technique sur les objets Set, Map, WeakSet et WeakMap

Voici une fiche technique résumant l'ensemble des fonctions liées aux objets Set, Map, WeakSet et WeakMap.

## L'objet Set

Permet de stocker des valeurs uniques de tout type. Il s'agit d'une sécurité comparé à un simple tableau. Je vous recommande d'utiliser cet objet lorsque vous voulez stocker des informations sensibles qui ne doivent pas être dupliquées. L'exécution d'un objet Set est également plus rapide qu'un objet Array (donc qu'un tableau), même si sur de petits tableaux, cela ne se remarque pas.

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

Permet de stocker des paires clé-valeur et de mémoriser leur ordre d'insertion.

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

Offre une flexibilité supplémentaire en comparaison de l'objet Set. Il n'accepte que des objets. Une fois que l'objet stocké dans le WeakSet passe à null, il est automatiquement retiré.

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

Offre une flexibilité supplémentaire en comparaison de l'objet Map.  Il n'accepte que des objets en clé. On utilise souvent cet objet pour stocker des données. Une fois que l'objet en clé n'existe plus (par exemple, si sa valeur passe à null), la valeur est automatiquement supprimée également.

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

## Conclusion

Vous n'utiliserez pas souvent ces nouveaux objets que JavaScript a ajouté récemment, néanmoins, si vous devez un jour en utiliser un, vous aurez tout ce qu'il vous faut dans cette formation pour le faire. Si vous ne devez retenir qu'une chose, c'est que ces objets servent surtout à stocker des données liées à un objet. Par exemple, si vous avez une application de messagerie, et un objet "utilisateur", vous pouvez utiliser un WeakMap pour stocker ses messages.