document.addEventListener("DOMContentLoaded", (event) => {
  const btn_yes = document.getElementById("btn-yes");
  const btn_no = document.getElementById("btn-no");
  const btn_add = document.getElementById("btn-add");
  let num_items = 0;

  // BUTTON ADD HANDLER
  btn_add.addEventListener("click", function () {
    // console.log("add button clicked.");
    const element = document.getElementById("accordionFlushExample");

    num_items = num_items + 1;

    if (element) {
      console.log("Element exists");
      document
        .getElementById("section-accordion-form")
        .classList.remove("visually-hidden");

      var newAccordionItem = document.createElement("div");
      newAccordionItem.classList.add("accordion-item");
      newAccordionItem.innerHTML = ` <h2 id="ex-heading${num_items}" class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse${num_items}"
                aria-expanded="false"
                aria-controls="flush-collapse${num_items}"
              >
              <span class="display-6">
              Exercise #${num_items}
              </span>
                
              </button>
            </h2>
            <div
              id="flush-collapse${num_items}"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
            <div class="accordion-body">
            <div class="row">
            <div class="col col-12 col-md-6 col-lg-2 mb-3">
            <label for="set-date" class="form-label">Date</label>
              <input
                type="date"
                class="datepicker_input form-control"
                placeholder="DD/MM/YYYY"
                required
                aria-label=""
              />
              </div>
              
              <div class="col col-12 col-md-6 col-lg-3 mb-3">
              <label for="set-exercise" class="form-label">Exercise Name</label>
              <select id="ex-name${num_items}" class="form-select" aria-label="Default select example"" >
                <option selected disabled>Choose One</option> 
                <option value="1">Run</option>
                <option value="2">Pushups</option>
                <option value="3">Pullups</option>
              </select>
            </div>

            <div class="col col-12 col-md-6 col-lg-3 mb-3">
            
            <label for="set-number" class="form-label">Number of Sets</label>
             <select class="form-select" aria-label="Default select example">
                <!-- <option selected>Open this select menu</option> -->
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option selected value="1">1</option>
              </select>
            </div>

            
            <div class="col col-12 col-md-6 col-lg-2 mb-3">
                <label for="set-reps" class="form-label">Reps</label>

             <input
                type="number"
                class="form-control"
                id="set-reps"
                placeholder="0"
                min="0"
              />
            </div>

            <div class="col col-12 col-md-6 col-lg-2 mb-3">
                <label for="set-weight" class="form-label">Weight Used</label>

             <input
                type="number"
                class="form-control"
                id="set-weight"
                placeholder="0"
                min="0"
              />
            </div>
            </div>
                </div>
                </div>`;
      document
        .getElementById("accordionFlushExample")
        .appendChild(newAccordionItem);

      newAccordionItem.firstElementChild.firstElementChild.focus();
    } else {
      console.log("Element does not exist");
      let accordionContainer = document.getElementById("accordion-container");
      let accordionSkeleton = `
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse${num_items}"
                aria-expanded="false"
                aria-controls="flush-collapse${num_items}"
              >
                Accordion Item ${num_items}
              </button>
            </h2>
            <div
              id="flush-collapse${num_items}"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body.
              </div>
            </div>
          </div>
        </div>`;

      // num_items = num_items + 1;
      accordionContainer.appendChild(accordionSkeleton);
    }
  });

  // BUTTON YES HANDLER
  btn_yes.addEventListener("click", function () {
    // console.log("hello from button yes");

    document.getElementById(
      "output-yes"
    ).innerHTML = `<h5>Great Job Champ, what did you do for a workout?</h5>`;

    document
      .getElementById("section-accordion-form")
      .classList.remove("visually-hidden");

    document
      .getElementById("section-workout-yes")
      .classList.remove("visually-hidden");

    document
      .getElementById("section-buttons")
      .classList.remove("visually-hidden");

    document.getElementById("section-no-form").classList.add("visually-hidden");
  });

  // BUTTON NO HANDLER
  btn_no.addEventListener("click", function () {
    // console.log("hello from button no");
    // console.log(btn_no);
    document.getElementById(
      "output-no"
    ).innerHTML = `<h5>Well then, you are a loser. Go do a workout and come back again.<h5>`;

    document
      .getElementById("section-workout-yes")
      .classList.add("visually-hidden");

    document
      .getElementById("section-accordion-form")
      .classList.add("visually-hidden");

    document
      .getElementById("section-no-form")
      .classList.remove("visually-hidden");
  });
});
