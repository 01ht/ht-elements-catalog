import { updateMetadata } from "@01ht/ht-client-helper-functions/metadata.js";

async function addTreeAttributeMeta(
  parameters,
  paramName,
  beforeText,
  beforeTextMany,
  title
) {
  let substring = "";
  let values = parameters[paramName];
  if (!values) return;
  if (title !== "") substring += `,`;
  let valuesLength = values.length;
  if (valuesLength === 1) {
    substring += ` ${beforeText} ${values[valuesLength - 1]}`;
  } else {
    substring += ` ${beforeTextMany}`;
    for (let i = 0; i < valuesLength; i++) {
      if (i === valuesLength - 1) {
        substring += ` и ${values[i]}`;
      } else {
        if (i === 0) {
          substring += ` ${values[i]}`;
        } else {
          substring += `, ${values[i]}`;
        }
      }
    }
  }
  return substring;
}

async function addFlatAttributeMeta(
  parameters,
  paramName,
  beforeText,
  beforeTextMany,
  title
) {
  let substring = "";
  let values = parameters[paramName];
  if (!values) return;
  if (title !== "") substring += `,`;
  let valuesLength = values.length;
  if (valuesLength === 1) {
    substring += ` ${beforeText} ${values[valuesLength - 1]}`;
  } else {
    substring += ` ${beforeTextMany}`;
    for (let i = 0; i < valuesLength; i++) {
      if (i === valuesLength - 1) {
        substring += ` и ${values[i]}`;
      } else {
        if (i === 0) {
          substring += ` ${values[i]}`;
        } else {
          substring += `, ${values[i]}`;
        }
      }
    }
  }
  return substring;
}

export async function _updateMeta(parameters, responseData) {
  try {
    let title = "";
    let description = "";
    let needAddPreviewText = false;
    // detault catalog page
    if (Object.keys(parameters).length === 0 || responseData.count === 0) {
      title =
        "Готовые курсы и модули для СДО(LMS) & Бесплатное онлайн обучение на Elements";
      description =
        "Каталог элементов обучения (электронных курсов, модулей для СДО итп) от независимых разработчиков, для развития вас и пользователей ваших систем.";
    }
    // nothing found
    if (responseData.count === 0) {
      title = "Результаты не найдены";
      description = "По данному запросу ничего не найдено.";
    }
    if (responseData.count > 0) {
      // add search
      if (parameters.search) {
        title += `${parameters.search}`;
      }
      // add tags
      if (parameters["tags"]) {
        let tagsMeta = await addFlatAttributeMeta(
          parameters,
          "tags",
          "",
          "",
          title
        );
        title += tagsMeta;
      }
      // add categories
      if (parameters["categories"]) {
        let categoriesMeta = await addTreeAttributeMeta(
          parameters,
          "categories",
          "",
          "",
          title
        );
        title += categoriesMeta.slice(2);
      }
      // add text if empty
      if (title === "") needAddPreviewText = true;
      // add direction
      if (parameters["direction"]) {
        let directionMeta = await addTreeAttributeMeta(
          parameters,
          "direction",
          "по направлению обучения",
          "по направлениям обучения",
          title
        );
        title += directionMeta;
      }
      // add platform
      if (parameters["platform"]) {
        let platformMeta = await addTreeAttributeMeta(
          parameters,
          "platform",
          "для",
          "для",
          title
        );
        title += platformMeta;
      }
      // add languages
      if (parameters["languages"]) {
        let languagesMeta = await addFlatAttributeMeta(
          parameters,
          "languages",
          "поддерживающие",
          "поддерживающие",
          title
        );
        title += languagesMeta;
      }
      // add tools
      if (parameters["tools"]) {
        let toolsMeta = await addFlatAttributeMeta(
          parameters,
          "tools",
          "сделанные используя",
          "сделанные используя",
          title
        );
        title += toolsMeta;
      }
      // add browsers
      if (parameters["browsers"]) {
        let browsersMeta = await addFlatAttributeMeta(
          parameters,
          "browsers",
          "совместимые с браузерами",
          "совместимые с браузерами",
          title
        );
        title += browsersMeta;
      }
      title = title.trim();
      description = "" + title;
      if (needAddPreviewText) {
        title = `элементы обучения ` + title;
      }
      description = `Выберите из ${responseData.count} ${
        responseData.count === 1 ? "элемента" : "элементов"
      }, ${description}`;
      title = title.charAt(0).toUpperCase() + title.slice(1);
      description = description.charAt(0).toUpperCase() + description.slice(1);
      if (title.length < 40) title += " от Elements";
      description += `. Все это создано нашим глобальным сообществом независимых разработчиков.`;
    }
    updateMetadata({
      title: title,
      description: description
    });
  } catch (error) {
    console.log("_updateMeta: " + error.message);
  }
}
