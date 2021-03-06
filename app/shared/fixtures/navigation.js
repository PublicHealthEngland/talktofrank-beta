export const primary = [
  {
    label: 'Home',
    url: '/',
    modifier: 'hidden--md-up',
    tracking: {
      label: 'Home',
      action: 'Click',
      category: 'Navigation'
    }
  },
  {
    label: 'Drugs A-Z',
    url: '/drugs-a-z',
    tracking: {
      label: 'Drugs A-Z',
      action: 'Click',
      category: 'Navigation'
    }
  },
  {
    label: 'News',
    url: '/news',
    tracking: {
      label: 'News listing',
      action: 'Click',
      category: 'Navigation'
    }
  },
  {
    label: 'Help and advice',
    url: '/get-help',
    tracking: {
      label: 'Get help',
      action: 'Click',
      category: 'Navigation'
    },
    subnavigation: [
      {
        label: 'What to do in an emergency',
        url: '/get-help/what-to-do-in-an-emergency',
        tracking: {
          label: 'What to do in an emergency',
          action: 'Click',
          category: 'Navigation'
        }
      },
      {
        label: '10 ways to deal with peer pressure',
        url: '/get-help/dealing-with-peer-pressure',
        tracking: {
          label: 'Dealing with peer pressure',
          action: 'Click',
          category: 'Navigation'
        }
      },
      {
        label: 'Concerned about a friend?',
        url: '/get-help/concerned-about-a-friend',
        tracking: {
          label: 'Concerned about a friend',
          action: 'Click',
          category: 'Navigation'
        }
      },
      {
        label: 'Concerned about a child?',
        url: '/get-help/concerned-about-a-child',
        tracking: {
          label: 'Concerned about a child',
          action: 'Click',
          category: 'Navigation'
        }
      },
      {
        label: 'What is drug treatment like?',
        url: '/get-help/what-is-drug-treatment-like',
        tracking: {
          label: 'What is drug treatment like',
          action: 'Click',
          category: 'Navigation'
        }
      },
      {
        label: 'Find a support centre',
        url: '/get-help/find-support-near-you',
        tracking: {
          label: 'Find a support centre - primary nav',
          action: 'Click',
          category: 'Navigation'
        }
      }
    ]
  },
  {
    label: 'Contact',
    url: '/contact-frank',
    tracking: {
      label: 'Contact Frank',
      action: 'Click',
      category: 'Navigation'
    }
  },
  {
    label: 'Call: 0300 1236600',
    url: 'tel:03001236600',
    modifier: 'hidden--md-up',
    tracking: {
      label: 'Telephone number mobile',
      action: 'Click',
      category: 'Phone contact'
    }
  }
]

export const footerButton = [{
  label: '0300 1236600',
  url: 'tel:03001236600',
  modifier: 'has-icon elevated btn btn--primary',
  icon: {
    url: '/ui/svg/telephone.svg',
    label: 'Telephone',
    classes: 'icon icon--large'
  },
  tracking: {
    label: 'Home',
    action: 'Click',
    category: 'Navigation'
  }
}]

export const footer = [
  {
    label: 'Email FRANK',
    url: '/contact',
    tracking: {
      label: 'Footer email contact',
      action: 'Click',
      category: 'Navigation'
    }
  },
  {
    label: 'Text 82111',
    url: 'sms:82111',
    tracking: {
      label: 'Text 82111',
      action: 'Click',
      category: 'Text message send'
    }
  },
  {
    label: 'Find a support centre',
    url: '/get-help/find-support-near-you',
    tracking: {
      label: 'Find a support centre - footer',
      action: 'Click',
      category: 'Navigation'
    }
  },
  {
    label: 'Feedback',
    url: '/feedback',
    tracking: {
      label: 'Send feedback',
      action: 'Click',
      category: 'Navigation'
    }
  }
]

export const footerUtility = [
  {
    label: 'Privacy policy',
    url: '/privacy-policy',
    tracking: {
      label: 'Privacy policy',
      action: 'Click',
      category: 'Footer navigation'
    }
  },
  {
    label: 'Cookie policy',
    url: '/cookie-policy',
    tracking: {
      label: 'Cookie policy',
      action: 'Click',
      category: 'Footer navigation'
    }
  },
  {
    label: 'Terms and conditions',
    url: '/terms-conditions',
    tracking: {
      label: 'Terms and conditions',
      action: 'Click',
      category: 'Footer navigation'
    }
  },
  {
    label: 'Disclaimer',
    url: '/disclaimer',
    tracking: {
      label: 'Disclaimer',
      action: 'Click',
      category: 'Footer navigation'
    }
  },
  {
    label: 'Accessibility statement',
    url: '/accessibility-statement',
    tracking: {
      label: 'Accessibility statement',
      action: 'Click',
      category: 'Footer navigation'
    }
  }
]
