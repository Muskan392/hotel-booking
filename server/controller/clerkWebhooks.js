import { verifyWebhook } from '@clerk/express/webhooks';
import User from '../models/user.js';

const clerkwebhooks = async (req, res) => {
  try {
    const event = await verifyWebhook(req);
    const { type, data } = event;

    const clerkId = data.id;
    const email = data.email_addresses?.[0]?.email_address || '';
    const firstName = data.first_name || '';
    const lastName = data.last_name || '';
    const imageUrl = data.image_url || '';

    if (type==='user.created') {
      await User.create({
        clerkId,
        email,
        firstName,
        lastName,
        imageUrl
      });
    }

    else if (type === 'user.updated') {
      await User.findOneAndUpdate(
        { clerkId },
        { email, firstName, lastName, imageUrl },
        { new: true }
      );
    }

    else if (type === 'user.deleted') {
      await User.findOneAndDelete({ clerkId });
    }

    return res.status(200).send('Webhook processed');

  } 
  catch (error) {
    console.error('Webhook verification failed:', error.message);
    return res.status(400).send('Invalid webhook');
  }
};

export default clerkwebhooks;