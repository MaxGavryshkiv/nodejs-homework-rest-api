const Contacts = require("../contactRequest");

const updateStatus = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const contact = await Contacts.updateStatusContact(
      userId,
      req.params.contactId,
      req.body
    );
    if (contact) {
      return res.json({ status: "success", code: 200, data: { contact } });
    }
    return res.json({ status: "error", code: 404, message: "Not found" });
  } catch (e) {
    next(e);
  }
};

module.exports = updateStatus;
