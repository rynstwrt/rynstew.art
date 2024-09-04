const navbarLinks = $("header > nav a");


const navbarLinkTargetMap = {};


navbarLinks.each(function()
{
    // const el = $($(this));
    // const el = $($(this));
    // const el = $($(this));
    // $(el).prop("href", "#");

    const id = $(this).attr("id")
    navbarLinkTargetMap[id] = $(this).attr("href");

    $(this).prop("href", "#");
});


navbarLinks.on("click", function()
{
    const target = navbarLinkTargetMap[$(this).attr("id")];
    if (!target)
        return;

    console.log(target);

    $(target)[0].scrollIntoView({ behavior: "smooth" });
});