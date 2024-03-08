window.onload = function() {
  const domainList = document.getElementById("domain-list");
  const domains = generateDomains();

  domains.forEach(domain => {
    const listItem = document.createElement("li");
    listItem.textContent = domain;
    domainList.appendChild(listItem);
  });
};

const generateDomains = () => {
  const pronouns = ["the", "an"];
  const adjectives = [
    "Creative",
    "Dynamic",
    "Vibrant",
    "Stellar",
    "Radiant",
    "Infinite",
    "Sparkling",
    "Serene",
    "Majestic",
    "Zenith"
  ];
  const tlds = [
    ".com",
    ".net",
    ".org",
    ".io",
    ".co",
    ".tech",
    ".online",
    ".biz",
    ".app",
    ".store",
    ".pt"
  ];
  const websites = ["website", "blog", "hub", "domain"];

  const domains = pronouns.flatMap(pronoun =>
    adjectives.flatMap(adjective =>
      tlds.flatMap(tld =>
        websites.map(website =>
          `${pronoun}${adjective}${website}${tld}`.toLowerCase()
        )
      )
    )
  );

  return domains;
};
