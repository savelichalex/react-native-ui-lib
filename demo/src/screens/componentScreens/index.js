
export function registerScreens(registrar) {

  registrar('unicorn.components.ActionSheetScreen', () => require('./ActionSheetScreen').default);
  registrar('unicorn.components.ActionBarScreen', () => require('./ActionBarScreen').default);
  registrar('unicorn.components.AvatarsScreen', () => require('./AvatarsScreen').default);
  registrar('unicorn.components.AnimatedImageScreen', () => require('./AnimatedImageScreen').default);
  registrar('unicorn.components.ButtonsScreen', () => require('./ButtonsScreen').default);
  registrar('unicorn.components.BadgesScreen', () => require('./BadgesScreen').default);
  registrar('unicorn.components.CardsScreen', () => require('./CardsScreen').default);
  registrar('unicorn.animations.CardScannerScreen', () => require('../componentScreens/CardScannerScreen').default);
  registrar('unicorn.components.CarouselScreen', () => require('./CarouselScreen').default);
  registrar('unicorn.components.CheckboxScreen', () => require('./CheckboxScreen').default);
  registrar('unicorn.components.ChipScreen', () => require('./ChipScreen').default);
  registrar('unicorn.components.ConnectionStatusBar', () => require('./ConnectionStatusBarScreen').default);
  registrar('unicorn.components.DialogScreen', () => require('./DialogScreen').default);
  registrar('unicorn.components.DrawerScreen', () => require('./DrawerScreen').default);
  registrar('unicorn.components.ExpandableSectionScreen', () => require('./ExpandableSectionScreen').default);
  registrar('unicorn.components.ChipsInputScreen', () => require('./ChipsInputScreen').default);
  registrar('unicorn.components.HintsScreen', () => require('./HintsScreen').default);
  registrar('unicorn.components.ImageScreen', () => require('./ImageScreen').default);
  registrar('unicorn.components.ProgressiveImageScreen', () => require('./ProgressiveImageScreen').default);
  registrar('unicorn.components.KeyboardAwareScrollViewScreen', () => require('./KeyboardAwareScrollViewScreen').default);
  registrar('unicorn.components.MaskedInputScreen', () => require('./MaskedInputScreen').default);
  registrar('unicorn.components.OverlaysScreen', () => require('./OverlaysScreen').default);
  registrar('unicorn.components.PageControlScreen', () => require('./PageControlScreen').default);
  registrar('unicorn.components.PanDismissibleScreen', () => require('./PanDismissibleScreen').default);
  registrar('unicorn.components.PanListenerScreen', () => require('./PanListenerScreen').default);
  registrar('unicorn.components.PanResponderScreen', () => require('./PanResponderScreen').default);
  registrar('unicorn.components.PickerScreen', () => require('./PickerScreen').default);
  registrar('unicorn.animations.ProgressBarScreen', () => require('../componentScreens/ProgressBarScreen').default);
  registrar('unicorn.components.RadioButtonScreen', () => require('./RadioButtonScreen').default);
  registrar('unicorn.components.ScrollBarScreen', () => require('./ScrollBarScreen').default);
  registrar('unicorn.components.SharedTransitionScreen', () => require('./SharedTransitionScreen').default);
  registrar('unicorn.components.StepperScreen', () => require('./StepperScreen').default);
  registrar('unicorn.components.SwitchScreen', () => require('./SwitchScreen').default);
  registrar('unicorn.components.ToastsScreen', () => require('./ToastsScreen').default);
  registrar('unicorn.components.TabControllerScreen', () => require('./TabControllerScreen').default);
  registrar('unicorn.components.TabBarScreen', () => require('./TabBarScreen').default);
  registrar('unicorn.components.TextScreen', () => require('./TextScreen').default);
  registrar('unicorn.components.TextFieldScreen', () => require('./TextFieldScreen').default);
  registrar('unicorn.wrappers.TouchableOpacityScreen', () => require('./TouchableOpacityScreen').default);
  registrar('unicorn.components.TourScreen', () => require('./TourScreen').default);
  registrar('unicorn.components.FeatureHighlightScreen', () => require('./FeatureHighlightScreen').default);
  registrar('unicorn.components.WheelPickerDialogScreen', () => require('./WheelPickerDialogScreen').default);
  registrar('unicorn.components.SliderScreen', () => require('./SliderScreen').default);
  registrar('unicorn.components.FloatingButtonScreen', () => require('./FloatingButtonScreen').default);
  registrar('unicorn.components.ColorPickerScreen', () => require('./ColorPickerScreen').default);
  registrar('unicorn.components.ColorSwatchScreen', () => require('./ColorSwatchScreen').default);
  registrar('unicorn.components.StackAggregatorScreen', () => require('./StackAggregatorScreen').default);
  registrar('unicorn.components.DateTimePickerScreen', () => require('./DateTimePickerScreen').default);
  registrar('unicorn.components.ViewScreen', () => require('./ViewScreen').default);
  registrar('unicorn.components.WizardScreen', () => require('./WizardScreen').default);
  // List Components
  registrar('unicorn.lists.BasicListScreen', () => require('./BasicListScreen').default);
  registrar('unicorn.lists.ContactsListScreen', () => require('./ContactsListScreen').default);
  registrar('unicorn.lists.ConversationListScreen', () => require('./ConversationListScreen').default);
  // Full Screen components
  registrar('unicorn.screens.EmptyStateScreen', () => require('./EmptyStateScreen').default);
  registrar('unicorn.screens.LoadingScreen', () => require('./LoadingScreen').default);
  registrar('unicorn.screens.ModalScreen', () => require('./ModalScreen').default);
  registrar('unicorn.components.WithScrollEnablerScreen', () => require('./WithScrollEnablerScreen').default);
  registrar('unicorn.components.WithScrollReachedScreen', () => require('./WithScrollReachedScreen').default);
  registrar('unicorn.components.FaderScreen', () => require('./FaderScreen').default);
  // Incubator Screens
  registrar('unicorn.components.IncubatorTextFieldScreen', () => require('./IncubatorTextFieldScreen').default);
}

