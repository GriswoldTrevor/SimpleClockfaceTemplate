function clockfaceSettings(props) {
  return (
    <Page>
      <Section 
          description={<Text align="center">If settings do not apply automatically, open another app on the watch and return to the clockface.</Text>}
          title={<Text bold>Clockface Settings</Text>}>
        
        <Toggle
          settingsKey="use24HourTime"
          label="Use 24 hour time"
        />
      </Section>
    </Page>
  );
}

registerSettingsPage(clockfaceSettings);