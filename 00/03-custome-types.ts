type newType = string;

interface newInterface {}

{
  type VALID_API_VALUE = string | number | boolean;

  let result: VALID_API_VALUE = "";

  type API_RESULT = {
    results: number;
    items: VALID_API_VALUE[];
    other_items: Array<VALID_API_VALUE>;
  };

  interface API_RESULTS {
    results: number;
    items: VALID_API_VALUE[];
    other_items: Array<VALID_API_VALUE>;
  }

  type BirdType = {
    wings: 2;
  };

  interface BirdInterface {
    wings: 2;
  }

  const bind1: BirdType = { wings: 2 };
  const bird2: BirdInterface = { wings: 2 };
  const bird3: BirdType = bird2; // Structrual typing
  // Duck typed
  // If looks like a Duck, act like a Duck, so it is Duck

  type Owl = BirdType & { nocturnal: true };
  type Robin = BirdType & { nocturnal: false };

  interface Chicken extends BirdInterface {
    colourFul: false;
    flies: false;
  }
  interface Peacock extends BirdInterface {
    colourFul: false;
    flies: false;
  }
  let chicken: Chicken = {};
  let owl: Owl = {};
}
