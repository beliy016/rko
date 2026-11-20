const messengerLinks = {
  telegram: "https://t.me/marsh_naim",
  max: "https://max.ru/u/f9LHodD0cOLKgZC-2tzekYEQJbBn6tSptAMmvFBhrucorMXA-sbv9h8RKe4",
};

for (const link of document.querySelectorAll("[data-messenger]")) {
  const address = messengerLinks[link.dataset.messenger];
  if (!address) {
    continue;
  }

  link.href = address;
  link.removeAttribute("aria-disabled");
}

if (Object.values(messengerLinks).some(Boolean)) {
  document.querySelector("#contact-note").textContent =
    "Напишите, что вас интересует работа по подбору курьеров. Расскажем об условиях и ответим на вопросы.";
}
