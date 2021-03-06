import React from 'react';

const RestaurantItemVariant = ({ register, type, handleMultiIngredient, title, ingredientGroup }) => {

    const variant = title.split(" ").join("")


    return (
        <div>
            <div className="meals-title">
                <h3 className='mb-0 mt-4'>{title}</h3>
                <p>1 Required</p>
            </div>
            {
                ingredientGroup?.a?.map(ingredient =>
                    <div className='mb-2' key={ingredient.id}>
                        {
                            ingredientGroup?.ingredient_type === 1 ?
                                <div className="meal_size">
                                    <div className="form-check" id={`itemIngredient${ingredient.id}`}>
                                        <input
                                            className="form-check-input ingredientVariant"
                                            type="radio" name="flexRadioDefault"
                                            id={`ingredient${ingredient?.ingredient_id}`}
                                            value={ingredient?.b[0]?.name}
                                            {...register(variant)}
                                        />

                                        <label className="form-check-label"
                                            htmlFor={`ingredient${ingredient?.ingredient_id}`}>

                                            {ingredient.b[0].name}

                                        </label>
                                    </div>

                                    <div>
                                        <label htmlFor="">{ingredient.ingredient_price}tk</label>
                                    </div>
                                </div>

                                :

                                <div key={ingredient.id} className="d-flex justify-content-between">
                                    <div className="form-check">
                                        <input className="form-check-input multiIngredient"
                                            type="checkbox"
                                            value={ingredient.b[0].name}
                                            id={`ingredientCheck${ingredient.id}`}
                                            onClick={() => handleMultiIngredient(ingredient.id, `ingredientCheck${ingredient.id}`, ingredient.ingredient_price)} />

                                        <label className="form-check-label" htmlFor={`ingredientCheck${ingredient.id}`}>
                                            {ingredient.b[0].name}
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="">{ingredient.ingredient_price}tk</label>
                                    </div>
                                </div>
                        }
                    </div>
                )

            }
            {/* {
                ingredientGroup?.ingredient_type === 2 &&
                ingredientGroup?.a?.map(ingredient =>
                    <div key={ingredient.id} className="d-flex justify-content-between">
                        <div className="form-check">
                            <input className="form-check-input multiIngredient"
                                type="checkbox"
                                value={ingredient.b[0].name}
                                id={`ingredientCheck${ingredient.id}`}
                                onClick={() => handleMultiIngredient(ingredient.id, `ingredientCheck${ingredient.id}`, ingredient.ingredient_price)} />

                            <label className="form-check-label" htmlFor={`ingredientCheck${ingredient.id}`}>
                                {ingredient.b[0].name}
                            </label>
                        </div>
                        <div>
                            <label htmlFor="">{ingredient.ingredient_price}tk</label>
                        </div>
                    </div>
                )
            } */}
        </div>
    );
};

export default RestaurantItemVariant;